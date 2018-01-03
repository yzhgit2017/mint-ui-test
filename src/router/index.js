import Vue from 'vue'
import Router from 'vue-router'
import MyMenu from '@/components/myMenu'
import ActionSheet from '@/components/pages/action-sheet'
import Badge from '@/components/pages/badge'
import Button from '@/components/pages/button'
import CellSwipe from '@/components/pages/cell-swipe'
import Cell from '@/components/pages/cell'
import Checklist from '@/components/pages/checklist'
import DatetimePicker from '@/components/pages/datetime-picker'
import Field from '@/components/pages/field'
import Header from '@/components/pages/header'
import IndexList from '@/components/pages/index-list'
import Indicator from '@/components/pages/Indicator'
import InfiniteScroll from '@/components/pages/infinite-scroll'
import Lazyload from '@/components/pages/lazyload'
import MessageBox from '@/components/pages/message-box'
import Navbar from '@/components/pages/navbar'
import PaletteButton from '@/components/pages/palette-button'
import Picker from '@/components/pages/picker'
import Popup from '@/components/pages/popup'
import Progress from '@/components/pages/progress'
import PullDown from '@/components/pages/pull-down'
import PullUp from '@/components/pages/pull-up'
import Radio from '@/components/pages/radio'
import Range from '@/components/pages/range'
import Search from '@/components/pages/search'
import Spinner from '@/components/pages/spinner'
import Swipe from '@/components/pages/swipe'
import Switch from '@/components/pages/switch'
import TabContainer from '@/components/pages/tab-container'
import Tabbar from '@/components/pages/tabbar'
import Toast from '@/components/pages/toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my-menu',
      component: MyMenu
    },
    {
      path: '/action-sheet',
      name: 'action-sheet',
      component: ActionSheet
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/cell-swipe',
      name: 'cell-swipe',
      component: CellSwipe
    },
    {
      path: '/cell',
      name: 'cell',
      component: Cell
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: Checklist
    },
    {
      path: '/datetime-picker',
      name: 'datetime-picker',
      component: DatetimePicker
    },
    {
      path: '/field',
      name: 'field',
      component: Field
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/index-list',
      name: 'index-list',
      component: IndexList
    },
    {
      path: '/indicator',
      name: 'indicator',
      component: Indicator
    },
    {
      path: '/infinite-scroll',
      name: 'infinite-scroll',
      component: InfiniteScroll
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: Lazyload
    },
    {
      path: '/message-box',
      name: 'message-box',
      component: MessageBox
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/palette-button',
      name: 'palette-button',
      component: PaletteButton
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/pull-down',
      name: 'pull-down',
      component: PullDown
    },
    {
      path: '/pull-up',
      name: 'pull-up',
      component: PullUp
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/range',
      name: 'range',
      component: Range
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: Spinner
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/tab-container',
      name: 'tab-container',
      component: TabContainer
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
  ]
})
