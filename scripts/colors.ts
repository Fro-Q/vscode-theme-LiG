import { monitorEventLoopDelay } from 'node:perf_hooks'
import { comments } from '@antfu/eslint-config'
import util from './util'

export const colors = {
  black: '#000',
  white: '#fff',
  rose: ['#f7c7c7', '#e79a9a', '#a45b5b'],
  coral: ['#f6bf9f', '#e0926d', '#9b5a36'],
  amber: ['#f1d89b', '#d7b366', '#916f3b'],
  cyan: ['#a2e1e1', '#68b7b7', '#3a7878'],
  teal: ['#9adcc0', '#60b89a', '#376f5a'],
  azure: ['#aacdf7', '#6fa8f0', '#3f6496'],
  indigo: ['#b8bae8', '#8286d4', '#4c4f93'],
  moss: ['#bedba6', '#87b173', '#526b46'],
  olive: ['#d6cf95', '#a69c60', '#6a643a'],
  emerald: ['#a3e4b8', '#69c493', '#387a55'],
  sage: ['#cadcc7', '#98b29a', '#627662'],
  mauve: ['#d2b7e0', '#a67dbe', '#6a4f88'],
  plum: ['#e1b9d5', '#b57aa7', '#774d70'],
  iris: ['#b8b7e5', '#8885c8', '#545295'],

  soft_50: '#fff9f5',
  soft_100: '#e7e2de',
  soft_200: '#cfcac7',
  soft_300: '#b7b3b0',
  soft_400: '#9f9c99',
  soft_500: '#878583',
  soft_600: '#6f6d6c',
  soft_700: '#575655',
  soft_800: '#3f3f3e',
  soft_900: '#272727',
  soft_950: '#0f1010',
}

// [dark, light]
export const LiGThemes = {
  // primary: ['#4d9375', '#1c6b48'],
  // primary: '#64bfa0',

  bg: [colors.soft_950, colors.soft_50],
  bgAlt: [colors.soft_900, colors.soft_100],
  bgFloat: [colors.soft_950, colors.soft_50],
  bgReversed: [colors.soft_100, colors.soft_900],
  bgHighlight: [colors.soft_400, colors.soft_600],

  fg: [colors.soft_300, colors.soft_700],
  fgMuted: [colors.soft_600, colors.soft_400],
  fgDim: [colors.soft_800, colors.soft_200],
  fgReversed: [colors.soft_900, colors.soft_100],
  fgStrong: [colors.soft_50, colors.soft_950],

  bgSelection: [colors.soft_900, colors.soft_100],
  bgCurLine: [colors.soft_900, colors.soft_100],
  bgFold: [util.blendFg(colors.soft_950, 0.8), util.blendBg(colors.soft_50, 0.8)],
  bgCurSearch: util.blendBg(colors.amber[1], 0.5),
  bgIncurSearch: util.blendBg(colors.amber[1], 0.4),
  bgSubstitue: colors.rose[1],
  bgStatusLine: [colors.soft_900, colors.soft_100],

  border: [colors.soft_600, colors.soft_400],
  borderMuted: [colors.soft_900, colors.soft_100],
  divider: [colors.soft_800, colors.soft_200],
  shadow: [colors.soft_900, colors.soft_100],

  // soft overrides
  softBg: [util.blendFg(colors.soft_950, 0.9), util.blendBg(colors.soft_50, 0.9)],
  softBgFloat: [util.blendFg(colors.soft_950, 0.9), util.blendBg(colors.soft_50, 0.9)],

  // git
  gitAdd: colors.emerald[1],
  gitDelete: colors.rose[1],
  gitChange: colors.amber[1],
  gitIgnore: [colors.soft_600, colors.soft_400],

  // diag
  diagError: colors.rose[1],
  diagWarn: colors.amber[1],
  diagInfo: colors.cyan[1],
  diagHint: colors.emerald[1],
  diagOk: colors.moss[1],

  // msg
  msgSuccess: colors.emerald[1],
  msgFailure: colors.rose[1],
  msgWarning: colors.amber[1],
  msgInfo: colors.cyan[1],

  // comments
  commentsError: colors.rose[1],
  commentsTodo: colors.iris[1],
  commentsWarning: colors.amber[1],
  commentsInfo: colors.cyan[1],
  commentsNote: colors.teal[1],
  commentsHint: colors.emerald[1],

  struct: colors.teal[1],
  structHl: colors.teal[0],
  structFd: colors.teal[2],
  action: colors.coral[1],
  actionHl: colors.coral[0],
  actionFd: colors.coral[2],
  ref: colors.azure[1],
  refHl: colors.azure[0],
  refFd: colors.azure[2],
  mono: [colors.soft_300, colors.soft_700],
  monoHl: [colors.soft_50, colors.soft_950],
  monoFd: [colors.soft_600, colors.soft_400],

  accent1: colors.teal[1],
  accent2: colors.coral[1],
} satisfies Record<string, [string, string] | string>
