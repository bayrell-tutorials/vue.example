<template>
	<div class="layout">
		<div class="layout_menu">
			<div class="layout_menu__title">Menu</div>
			<ul>
				<li><router-link :to="{path: '/'}">Home</router-link></li>
				<li><router-link :to="{path: '/home2'}">Home 2</router-link></li>
				<li><router-link :to="{path: '/crud'}">CRUD</router-link></li>
			</ul>
		</div>
		<div class="layout_content">
			<router-view />
		</div>
	</div>
</template>
