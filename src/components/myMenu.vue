<template>
	<div class="container">
		<h1>菜单</h1>
		<div class="menu-list">
			<mt-cell title="action-sheet"  is-link :to="{ name: 'action-sheet' }"></mt-cell>
			<mt-cell title="badge"  is-link :to="{ name: 'badge' }"></mt-cell>
			<mt-cell title="button"  is-link :to="{ name: 'button' }"></mt-cell>
			<mt-cell title="cell-swipe"  is-link :to="{ name: 'cell-swipe' }"></mt-cell>
			<mt-cell title="cell"  is-link :to="{ name: 'cell' }"></mt-cell>
			<mt-cell title="checklist"  is-link :to="{ name: 'checklist' }"></mt-cell>
			<mt-cell title="datetime-picker"  is-link :to="{ name: 'datetime-picker' }"></mt-cell>
			<mt-cell title="field"  is-link :to="{ name: 'field' }"></mt-cell>
			<mt-cell title="header"  is-link :to="{ name: 'header' }"></mt-cell>
			<mt-cell title="index-list"  is-link :to="{ name: 'index-list' }"></mt-cell>
			<mt-cell title="indicator"  is-link :to="{ name: 'indicator' }"></mt-cell>
			<mt-cell title="infinite-scroll"  is-link :to="{ name: 'infinite-scroll' }"></mt-cell>
			<mt-cell title="lazyload"  is-link :to="{ name: 'lazyload' }"></mt-cell>
			<mt-cell title="message-box"  is-link :to="{ name: 'message-box' }"></mt-cell>
			<mt-cell title="navbar"  is-link :to="{ name: 'navbar' }"></mt-cell>
			<mt-cell title="palette-button"  is-link :to="{ name: 'palette-button' }"></mt-cell>
			<mt-cell title="picker"  is-link :to="{ name: 'picker' }"></mt-cell>
			<mt-cell title="popup"  is-link :to="{ name: 'popup' }"></mt-cell>
			<mt-cell title="progress"  is-link :to="{ name: 'progress' }"></mt-cell>
			<mt-cell title="pull-down"  is-link :to="{ name: 'pull-down' }"></mt-cell>
			<mt-cell title="pull-up"  is-link :to="{ name: 'pull-up' }"></mt-cell>
			<mt-cell title="radio"  is-link :to="{ name: 'radio' }"></mt-cell>
			<mt-cell title="range"  is-link :to="{ name: 'range' }"></mt-cell>
			<mt-cell title="search"  is-link :to="{ name: 'search' }"></mt-cell>
			<mt-cell title="spinner"  is-link :to="{ name: 'spinner' }"></mt-cell>
			<mt-cell title="swipe"  is-link :to="{ name: 'swipe' }"></mt-cell>
			<mt-cell title="switch"  is-link :to="{ name: 'switch' }"></mt-cell>
			<mt-cell title="tab-container"  is-link :to="{ name: 'tab-container' }"></mt-cell>
			<mt-cell title="tabbar"  is-link :to="{ name: 'tabbar' }"></mt-cell>
			<mt-cell title="toast"  is-link :to="{ name: 'toast' }"></mt-cell>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'myMenu',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
    h1{
    	text-align: center;
    }
</style>