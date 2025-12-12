import type { GetThemeOptions } from './helper'
import { read } from 'node:fs'
import { stringify } from 'node:querystring'
import { deprecate } from 'node:util'
import { toArray } from '@antfu/utils'
import { LiGThemes } from './colors'
import { createThemeHelpers } from './helper'

export default function getTheme(options: GetThemeOptions) {
  const {
    pick,
    v: c,
    colors,
  } = createThemeHelpers(options)

  const theme = {
    name: options.name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': c('border'),
      'foreground': c('fg'),
      'descriptionForeground': c('fgMuted'),
      'errorForeground': c('diagError'),

      'textLink.foreground': c('accent1'),
      'textLink.activeForeground': c('accent1'),
      'textBlockQuote.background': c('bg'),
      'textBlockQuote.border': c('borderMuted'),
      'textCodeBlock.background': c('bg'),
      'textPreformat.foreground': c('fgMuted'),
      'textSeparator.foreground': c('fgMuted'),

      'button.background': c('bgReversed'),
      'button.foreground': c('fgReversed'),
      'button.hoverBackground': c('bgReversed'),

      'checkbox.background': c('bg'),
      'checkbox.border': c('borderMuted'),

      'dropdown.background': c('bg'),
      'dropdown.border': c('borderMuted'),
      'dropdown.foreground': c('fg'),
      'dropdown.listBackground': c('bg'),

      'input.background': c('bg'),
      'input.border': c('borderMuted'),
      'input.foreground': c('fg'),
      'input.placeholderForeground': c('fgMuted'),
      'inputOption.activeBackground': c('bgAlt'),

      'badge.foreground': c('fgReversed'),
      'badge.background': c('bgReversed'),

      'progressBar.background': c('accent1'),

      'titleBar.activeForeground': c('fgStrong'),
      'titleBar.activeBackground': c('bg'),
      'titleBar.inactiveForeground': c('fgMuted'),
      'titleBar.inactiveBackground': c('bg'),
      'titleBar.border': c('borderMuted'),

      'activityBar.foreground': c('fg'),
      'activityBar.inactiveForeground': c('fgMuted'),
      'activityBar.background': c('bg'),
      'activityBarBadge.foreground': c('fgReversed'),
      'activityBarBadge.background': c('bgReversed'),
      'activityBar.activeBorder': c('accent1'),
      'activityBar.border': c('borderMuted'),

      'sideBar.foreground': c('fg'),
      'sideBar.background': c('bgFloat'),
      'sideBar.border': c('borderMuted'),
      'sideBarTitle.foreground': c('fgStrong'),
      'sideBarSectionHeader.foreground': c('fgStrong'),
      'sideBarSectionHeader.background': c('bgAlt'),
      'sideBarSectionHeader.border': c('borderMuted'),

      'list.hoverForeground': c('fg'),
      'list.inactiveSelectionForeground': c('fgMuted'),
      'list.activeSelectionForeground': c('fgStrong'),
      'list.hoverBackground': c('bgSelection'),
      'list.inactiveSelectionBackground': c('bgAlt'),
      'list.activeSelectionBackground': c('bgAlt'),
      'list.inactiveFocusBackground': c('bg'),
      'list.focusBackground': c('bgAlt'),
      'list.highlightForeground': c('fg'),

      'tree.indentGuidesStroke': c('divider'),

      'notificationCenterHeader.foreground': c('fgStrong'),
      'notificationCenterHeader.background': c('bg'),
      'notifications.foreground': c('fg'),
      'notifications.background': c('bg'),
      'notifications.border': c('borderMuted'),
      'notificationsErrorIcon.foreground': c('diagError'),
      'notificationsWarningIcon.foreground': c('diagWarn'),
      'notificationsInfoIcon.foreground': c('diagInfo'),

      'pickerGroup.border': c('borderMuted'),
      'pickerGroup.foreground': c('fg'),
      'quickInput.background': c('bg'),
      'quickInput.foreground': c('fg'),
      'quickInputList.focusBackground': c('bgAlt'),

      'statusBar.foreground': c('fg'),
      'statusBar.background': c('bgStatusLine'),
      'statusBar.border': c('bg'),
      'statusBar.noFolderBackground': c('bg'),
      'statusBar.debuggingBackground': c('bg'),
      'statusBar.debuggingForeground': c('fg'),
      'statusBarItem.prominentBackground': c('bgAlt'),

      'editorGroupHeader.tabsBackground': c('bg'),
      'editorGroupHeader.tabsBorder': c('borderMuted'),
      'editorGroup.border': c('borderMuted'),

      'tab.activeForeground': c('fgStrong'),
      'tab.inactiveForeground': c('fgMuted'),
      'tab.inactiveBackground': c('bg'),
      'tab.activeBackground': c('bg'),
      'tab.hoverBackground': c('bgAlt'),
      'tab.unfocusedHoverBackground': c('bg'),
      'tab.border': c('borderMuted'),
      'tab.unfocusedActiveBorderTop': c('borderMuted'),
      'tab.activeBorder': c('borderMuted'),
      'tab.unfocusedActiveBorder': c('borderMuted'),
      'tab.activeBorderTop': c('fgStrong'),

      'breadcrumb.foreground': c('fgMuted'),
      'breadcrumb.focusForeground': c('fg'),
      'breadcrumb.background': c('bg'),
      'breadcrumb.activeSelectionForeground': c('fgStrong'),
      'breadcrumbPicker.background': c('bg'),

      'editor.foreground': c('fg'),
      'editor.background': c('bg'),
      'editorWidget.background': c('bg'),
      'editor.foldBackground': c('bgFold'),
      'editor.lineHighlightBackground': c('bgAlt'),
      'editorLineNumber.foreground': c('fgMuted'),
      'editorLineNumber.activeForeground': c('fgStrong'),
      'editorIndentGuide.background': c('divider'),
      'editorIndentGuide.activeBackground': c('fgMuted'),
      'editorWhitespace.foreground': c('fgDim'),
      'editorCursor.foreground': c('fg'),

      'editor.findMatchBackground': c('bgCurSearch'),
      'editor.findMatchHighlightBackground': c('bgIncurSearch'),
      'editor.inactiveSelectionBackground': c('bgSelection'),
      'editor.selectionBackground': c('bgSelection'),
      'editor.selectionHighlightBackground': c('bgSelection'),
      'editor.wordHighlightBackground': c('accent1', '20'),
      'editor.wordHighlightStrongBackground': c('accent1', '30'),
      'editorBracketMatch.background': c('bg'),

      'diffEditor.insertedTextBackground': c('gitAdd', '22'),
      'diffEditor.removedTextBackground': c('gitDelete', '22'),

      'scrollbar.shadow': c('shadow'),
      'scrollbarSlider.background': c('bgAlt'),
      'scrollbarSlider.hoverBackground': c('bgAlt'),
      'scrollbarSlider.activeBackground': c('bgAlt'),
      'editorOverviewRuler.border': c('borderMuted'),

      'panel.background': c('bg'),
      'panel.border': c('borderMuted'),
      'panelTitle.activeBorder': c('fgStrong'),
      'panelTitle.activeForeground': c('fgStrong'),
      'panelTitle.inactiveForeground': c('fgMuted'),
      'panelInput.border': c('borderMuted'),

      'terminal.foreground': c('fg'),
      'terminal.selectionBackground': c('bgSelection'),
      'terminal.ansiBrightBlack': c('bgAlt'),
      'terminal.ansiBrightBlue': colors.azure[0],
      'terminal.ansiBrightCyan': colors.cyan[0],
      'terminal.ansiBrightGreen': colors.emerald[0],
      'terminal.ansiBrightMagenta': colors.plum[0],
      'terminal.ansiBrightRed': colors.rose[0],
      'terminal.ansiBrightWhite': c('fgStrong'),
      'terminal.ansiBrightYellow': colors.amber[0],
      'terminal.ansiBlack': c('bg'),
      'terminal.ansiBlue': colors.azure[1],
      'terminal.ansiCyan': colors.cyan[1],
      'terminal.ansiGreen': colors.emerald[1],
      'terminal.ansiMagenta': colors.plum[1],
      'terminal.ansiRed': colors.rose[1],
      'terminal.ansiWhite': c('fgStrong'),
      'terminal.ansiYellow': colors.amber[1],

      'gitDecoration.addedResourceForeground': c('gitAdd'),
      'gitDecoration.modifiedResourceForeground': c('gitChange'),
      'gitDecoration.deletedResourceForeground': c('gitDelete'),
      'gitDecoration.untrackedResourceForeground': c('gitIgnore'),
      'gitDecoration.ignoredResourceForeground': c('gitIgnore'),
      'gitDecoration.conflictingResourceForeground': c('diagWarn'),
      'gitDecoration.submoduleResourceForeground': c('fg'),

      'editorGutter.modifiedBackground': c('gitChange'),
      'editorGutter.modifiedSecondaryBackground': c('gitChange', '60'),
      'editorGutter.addedBackground': c('gitAdd'),
      'editorGutter.addedSecondaryBackground': c('gitAdd', '60'),
      'editorGutter.deletedBackground': c('gitDelete'),
      'editorGutter.deletedSecondaryBackground': c('gitDelete', '60'),

      'editorBracketHighlight.foreground1': colors.coral[1],
      'editorBracketHighlight.foreground2': colors.cyan[1],
      'editorBracketHighlight.foreground3': colors.amber[1],
      'editorBracketHighlight.foreground4': colors.moss[1],
      'editorBracketHighlight.foreground5': colors.rose[1],
      'editorBracketHighlight.foreground6': colors.iris[1],
      'editorBracketHighlight.foreground7': colors.plum[1],

      'debugToolBar.background': c('bg'),
      'editor.stackFrameHighlightBackground': c('bg'),
      'editor.focusedStackFrameHighlightBackground': c('bg'),

      'peekViewEditor.matchHighlightBackground': c('bgCurSearch'),
      'peekViewResult.matchHighlightBackground': c('bgCurSearch'),
      'peekViewEditor.background': c('bg'),
      'peekViewResult.background': c('bg'),

      'settings.headerForeground': c('fg'),
      'settings.modifiedItemIndicator': c('accent1'),
      'welcomePage.buttonBackground': c('fgMuted'),
      'welcomePage.buttonHoverBackground': c('fg'),

      'problemsErrorIcon.foreground': c('diagError'),
      'problemsWarningIcon.foreground': c('diagWarn'),
      'problemsInfoIcon.foreground': c('diagInfo'),

      'editorError.foreground': c('diagError'),
      'editorWarning.foreground': c('diagWarn'),
      'editorInfo.foreground': c('diagInfo'),
      'editorHint.foreground': c('diagHint'),

      'editorGutter.commentRangeForeground': c('fgMuted'),
      'editorGutter.foldingControlForeground': c('fgMuted'),

      'editorInlayHint.foreground': c('fgMuted'),
      'editorInlayHint.background': c('bg'),

      'editorStickyScroll.background': c('bg'),
      'editorStickyScrollHover.background': c('bgAlt'),

      'menu.separatorBackground': c('divider'),
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      'namespace': c('struct'),
      'class': c('refFd'),
      'enum': c('ref'),
      'interface': c('refFd'),
      'struct': c('refFd'),
      'typeParameter': c('refFd'),
      'type': c('refFd'),

      'parameter': c('monoHl'),
      'variable': c('monoHl'),
      'property': c('mono'),
      'enumMember': c('ref'),

      'decorator': c('struct'),
      'event': c('actionHl'),

      'function': c('action'),
      'method': c('action'),
      'macro': c('actionHl'),

      'comment': c('monoFd'),
      'string': c('monoFd'),
      'keyword': c('mono'),
      'number': c('ref'),
      'regexp': c('refHl'),
      'operator': c('monoFd'),
      'boolean': c('ref'),

      'magicFunction': c('action'),
      'magicFunction.declaration': c('mono'),

      'selfParameter': c('refHl'),
      'selfParameter.declaration': c('refHl'),
      'clsParameter': c('refHl'),
      'clsParameter.declaration': c('refHl'),

      'namespace.declaration': c('structHl'),
      'namespace.definition': c('structHl'),
      'class.declaration': c('refHl'),
      'class.definition': c('refHl'),
      'enum.declaration': c('refHl'),
      'enum.definition': c('refHl'),
      'interface.declaration': c('refHl'),
      'interface.definition': c('refHl'),
      'struct.declaration': c('refHl'),
      'struct.definition': c('refHl'),
      'typeParameter.declaration': c('refHl'),
      'typeParameter.definition': c('refHl'),
      'type.declaration': c('refHl'),
      'type.definition': c('refHl'),
      'parameter.declaration': c('struct'),
      'parameter.definition': c('struct'),
      'property.declaration': c('struct'),
      'property.definition': c('struct'),
      'enumMember.declaration': c('refHl'),
      'enumMember.definition': c('refHl'),
      'method.declaration': c('actionHl'),
      'method.definition': c('actionHl'),
      'function.declaration': c('actionHl'),
      'function.definition': c('actionHl'),

      'keyword.documentation': c('struct'),

      'namespace.defaultLibrary': { fontStyle: 'italic' },
      'class.defaultLibrary': { fontStyle: 'italic' },
      'enum.defaultLibrary': { fontStyle: 'italic' },
      'interface.defaultLibrary': { fontStyle: 'italic' },
      'struct.defaultLibrary': { fontStyle: 'italic' },
      'typeParameter.defaultLibrary': { fontStyle: 'italic' },
      'type.defaultLibrary': { fontStyle: 'italic' },

      'parameter.defaultLibrary': { fontStyle: 'italic' },
      'variable.defaultLibrary': { fontStyle: 'italic' },
      'property.defaultLibrary': { fontStyle: 'italic' },
      'enumMember.defaultLibrary': { fontStyle: 'italic' },

      'decorator.defaultLibrary': { fontStyle: 'italic' },
      'event.defaultLibrary': { fontStyle: 'italic' },

      'function.defaultLibrary': { fontStyle: 'italic' },
      'method.defaultLibrary': { fontStyle: 'italic' },
      'macro.defaultLibrary': { fontStyle: 'italic' },

      'comment.defaultLibrary': { fontStyle: 'italic' },
      'string.defaultLibrary': { fontStyle: 'italic' },
      'keyword.defaultLibrary': { fontStyle: 'italic' },
      'number.defaultLibrary': { fontStyle: 'italic' },
      'regexp.defaultLibrary': { fontStyle: 'italic' },
      'operator.defaultLibrary': { fontStyle: 'italic' },
      'boolean.defaultLibrary': { fontStyle: 'italic' },

      'class.builtin': c('refHl'),
      'class.typeHint': c('refFd'),
      'class.decorator': c('struct'),
      'function.builtin': c('actionHl'),
      'function.decorator': c('struct'),
      'property.decorator': c('monoHl'),
      // 'variable.readonly': c('ref'),
    },
    tokenColors: [
      {
        scope: [
          'entity.name.tag',
          'variable.parameter',
          'punctuation.definition.decorator',
        ],
        settings: {
          foreground: c('struct'),
        },
      },
      {
        scope: [
          'entity.name.function',
          'keyword.control.flow',
          'storage.modifier.async',
          'storage.type.function.async',

          'punctuation.attribute-shorthand.bind',
        ],
        settings: {
          foreground: c('action'),
        },
      },
      {
        scope: [
          'support.function.builtin',
        ],
        settings: {
          foreground: c('actionHl'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'constant.language.boolean',

          'support.class.component',

        ],
        settings: {
          foreground: c('ref'),
        },
      },
      {
        scope: [
          'constant.language',
          'constant.character.escape',
          'support.type.builtin',
          'string.regexp',

          'entity.name.type.interface',
          'entity.name.type.alias',

          'variable.parameter.function.language.special',
        ],
        settings: {
          foreground: c('refHl'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'support.type',
        ],
        settings: {
          foreground: c('refFd'),
        },
      },
      {
        scope: [
          'constant.character',
          'entity.other.attribute-name',
        ],
        settings: {
          foreground: c('mono'),
        },
      },
      {
        scope: [
          'variable.other.readwrite',
        ],
        settings: {
          foreground: c('monoHl'),
        },
      },
      {
        scope: [
          'string',
          'comment',
          'keyword.operator',
          'punctuation',
        ],
        settings: {
          foreground: c('monoFd'),
        },
      },
    //   {
    //     scope: [
    //       'comment',
    //       'punctuation.definition.comment',
    //       'string.comment',
    //     ],
    //     settings: {
    //       foreground: c('comment'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'delimiter.bracket',
    //       'delimiter',
    //       'invalid.illegal.character-not-allowed-here.html',
    //       'keyword.operator.rest',
    //       'keyword.operator.spread',
    //       'keyword.operator.type.annotation',
    //       'keyword.operator.relational',
    //       'keyword.operator.assignment',
    //       'keyword.operator.type',
    //       'meta.brace',
    //       'meta.tag.block.any.html',
    //       'meta.tag.inline.any.html',
    //       'meta.tag.structure.input.void.html',
    //       'meta.type.annotation',
    //       'meta.embedded.block.github-actions-expression',
    //       'storage.type.function.arrow',
    //       'meta.objectliteral.ts',
    //       'punctuation',
    //       'punctuation.definition.string.begin.html.vue',
    //       'punctuation.definition.string.end.html.vue',
    //     ],
    //     settings: {
    //       foreground: c('delimiter'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'constant',
    //       'entity.name.constant',
    //       'variable.language',
    //       'meta.definition.variable',
    //     ],
    //     settings: {
    //       foreground: c('constant'),
    //     },
    //   },
    //   {
    //     scope: ['entity', 'entity.name'],
    //     settings: {
    //       foreground: c('variable'),
    //     },
    //   },
    //   {
    //     scope: 'variable.parameter.function',
    //     settings: {
    //       foreground: c('func'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'entity.name.tag',
    //       'tag.html',
    //     ],
    //     settings: {
    //       foreground: c('tag'),
    //     },
    //   },
    //   {
    //     scope: 'entity.name.function',
    //     settings: {
    //       foreground: c('func'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'keyword',
    //       'storage.type.class.jsdoc',
    //       'punctuation.definition.template-expression',
    //     ],
    //     settings: {
    //       foreground: c('keyword'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'storage',
    //       'storage.type',
    //       'support.type.builtin',
    //       'constant.language.undefined',
    //       'constant.language.null',
    //       'constant.language.import-export-all.ts',
    //     ],
    //     settings: {
    //       foreground: c('storageClass'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'text.html.derivative',
    //       'storage.modifier.package',
    //       'storage.modifier.import',
    //       'storage.type.java',
    //     ],
    //     settings: {
    //       foreground: c('fg'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'string',
    //       'string punctuation.section.embedded source',
    //       'attribute.value',
    //     ],
    //     settings: {
    //       foreground: c('string'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'punctuation.definition.string',
    //     ],
    //     settings: {
    //       foreground: c('string'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'punctuation.support.type.property-name',
    //     ],
    //     settings: {
    //       foreground: c('property'),
    //     },
    //   },
    //   {
    //     scope: 'support',
    //     settings: {
    //       foreground: c('property'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'property',
    //       'meta.property-name',
    //       'meta.object-literal.key',
    //       'entity.name.tag.yaml',
    //       'attribute.name',
    //     ],
    //     settings: {
    //       foreground: c('property'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'entity.other.attribute-name',
    //       'invalid.deprecated.entity.other.attribute-name.html',
    //     ],
    //     settings: {
    //       foreground: c('delimiter'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'variable',
    //       'identifier',
    //     ],
    //     settings: {
    //       foreground: c('variable'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'support.type.primitive',
    //       'entity.name.type',
    //     ],
    //     settings: {
    //       foreground: c('type'),
    //     },
    //   },
    //   {
    //     scope: 'namespace',
    //     settings: {
    //       foreground: c('include'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'keyword.operator',
    //       'keyword.operator.assignment.compound',
    //       'meta.var.expr.ts',
    //     ],
    //     settings: {
    //       foreground: c('operator'),
    //     },
    //   },
    //   {
    //     scope: 'invalid.broken',
    //     settings: {
    //       fontStyle: 'italic',
    //       foreground: c('diagError'),
    //     },
    //   },
    //   {
    //     scope: 'invalid.deprecated',
    //     settings: {
    //       fontStyle: 'italic',
    //       foreground: c('diagError'),
    //     },
    //   },
    //   {
    //     scope: 'invalid.illegal',
    //     settings: {
    //       fontStyle: 'italic',
    //       foreground: c('diagError'),
    //     },
    //   },
    //   {
    //     scope: 'invalid.unimplemented',
    //     settings: {
    //       fontStyle: 'italic',
    //       foreground: c('diagError'),
    //     },
    //   },
    //   {
    //     scope: 'carriage-return',
    //     settings: {
    //       fontStyle: 'italic underline',
    //       background: c('diagError', '22'),
    //       foreground: c('fg'),
    //       content: '^M',
    //     },
    //   },
    //   {
    //     scope: 'message.error',
    //     settings: {
    //       foreground: c('msgFailure'),
    //     },
    //   },
    //   {
    //     scope: 'string variable',
    //     settings: {
    //       foreground: c('string'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'source.regexp',
    //       'string.regexp',
    //     ],
    //     settings: {
    //       foreground: c('specialChar'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'string.regexp.character-class',
    //       'string.regexp constant.character.escape',
    //       'string.regexp source.ruby.embedded',
    //       'string.regexp string.regexp.arbitrary-repitition',
    //     ],
    //     settings: {
    //       foreground: c('string'),
    //     },
    //   },
    //   {
    //     scope: 'string.regexp constant.character.escape',
    //     settings: {
    //       foreground: c('specialChar'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'support.constant',
    //     ],
    //     settings: {
    //       foreground: c('constant'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'keyword.operator.quantifier.regexp',
    //       'constant.numeric',
    //       'number',
    //     ],
    //     settings: {
    //       foreground: c('number'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'keyword.other.unit',
    //     ],
    //     settings: {
    //       foreground: c('keyword'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'constant.language.boolean',
    //       'constant.language',
    //     ],
    //     settings: {
    //       foreground: c('boolean'),
    //     },
    //   },
    //   {
    //     scope: 'meta.module-reference',
    //     settings: {
    //       foreground: c('type'),
    //     },
    //   },
    //   {
    //     scope: 'punctuation.definition.list.begin.markdown',
    //     settings: {
    //       foreground: c('delimiter'),
    //     },
    //   },
    //   {
    //     scope: ['markup.heading', 'markup.heading entity.name'],
    //     settings: {
    //       fontStyle: 'bold',
    //       foreground: c('fgStrong'),
    //     },
    //   },
    //   {
    //     scope: 'markup.quote',
    //     settings: {
    //       foreground: c('type'),
    //     },
    //   },
    //   {
    //     scope: 'markup.italic',
    //     settings: {
    //       fontStyle: 'italic',
    //       foreground: c('fg'),
    //     },
    //   },
    //   {
    //     scope: 'markup.bold',
    //     settings: {
    //       fontStyle: 'bold',
    //       foreground: c('fg'),
    //     },
    //   },
    //   {
    //     scope: 'markup.raw',
    //     settings: {
    //       foreground: c('string'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'markup.deleted',
    //       'meta.diff.header.from-file',
    //       'punctuation.definition.deleted',
    //     ],
    //     settings: {
    //       background: c('gitDelete', '22'),
    //       foreground: c('gitDelete'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'markup.inserted',
    //       'meta.diff.header.to-file',
    //       'punctuation.definition.inserted',
    //     ],
    //     settings: {
    //       background: c('gitAdd', '22'),
    //       foreground: c('gitAdd'),
    //     },
    //   },
    //   {
    //     scope: ['markup.changed', 'punctuation.definition.changed'],
    //     settings: {
    //       background: c('gitChange', '22'),
    //       foreground: c('gitChange'),
    //     },
    //   },
    //   {
    //     scope: ['markup.ignored', 'markup.untracked'],
    //     settings: {
    //       foreground: c('gitIgnore'),
    //       background: c('gitIgnore', '22'),
    //     },
    //   },
    //   {
    //     scope: 'meta.diff.range',
    //     settings: {
    //       foreground: c('gitChange'),
    //       fontStyle: 'bold',
    //     },
    //   },
    //   {
    //     scope: 'meta.diff.header',
    //     settings: {
    //       foreground: c('fgStrong'),
    //     },
    //   },
    //   {
    //     scope: 'meta.separator',
    //     settings: {
    //       fontStyle: 'bold',
    //       foreground: c('fgStrong'),
    //     },
    //   },
    //   {
    //     scope: 'meta.output',
    //     settings: {
    //       foreground: c('fgStrong'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'brackethighlighter.tag',
    //       'brackethighlighter.curly',
    //       'brackethighlighter.round',
    //       'brackethighlighter.square',
    //       'brackethighlighter.angle',
    //       'brackethighlighter.quote',
    //     ],
    //     settings: {
    //       foreground: c('delimiter'),
    //     },
    //   },
    //   {
    //     scope: 'brackethighlighter.unmatched',
    //     settings: {
    //       foreground: c('diagError'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'constant.other.reference.link',
    //       'string.other.link',
    //       'punctuation.definition.string.begin.markdown',
    //       'punctuation.definition.string.end.markdown',
    //     ],
    //     settings: {
    //       foreground: c('fg'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'markup.underline.link.markdown',
    //       'markup.underline.link.image.markdown',
    //     ],
    //     settings: {
    //       foreground: c('fgMuted'),
    //       fontStyle: 'underline',
    //     },
    //   },
    //   {
    //     scope: [
    //       'type.identifier',
    //       'constant.other.character-class.regexp',
    //     ],
    //     settings: {
    //       foreground: c('specialChar'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'entity.other.attribute-name.html.vue',
    //     ],
    //     settings: {
    //       foreground: c('func'),
    //     },
    //   },
    //   {
    //     scope: [
    //       'invalid.illegal.unrecognized-tag.html',
    //     ],
    //     settings: {
    //       fontStyle: 'normal',
    //     },
    //   },
    ],
    rules: [] as any[],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
