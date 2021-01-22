export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Menu } from '../..\\components\\Menu.js'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as ChartBar } from '../..\\components\\chart\\chart-bar.vue'
export { default as ChartDoughnut } from '../..\\components\\chart\\chart-doughnut.vue'
export { default as ChartLine } from '../..\\components\\chart\\chart-line.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyMenu = import('../..\\components\\Menu.js' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
export const LazySidebar = import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazyChartBar = import('../..\\components\\chart\\chart-bar.vue' /* webpackChunkName: "components/chart-bar" */).then(c => c.default || c)
export const LazyChartDoughnut = import('../..\\components\\chart\\chart-doughnut.vue' /* webpackChunkName: "components/chart-doughnut" */).then(c => c.default || c)
export const LazyChartLine = import('../..\\components\\chart\\chart-line.vue' /* webpackChunkName: "components/chart-line" */).then(c => c.default || c)
