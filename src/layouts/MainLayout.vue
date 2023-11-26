<script setup>
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { essentialLinks } from 'src/constants/index';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const $q = useQuasar();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
	leftDrawerOpen.value = !leftDrawerOpen.value;
};

const logout = () => {
	$q.dialog({
		title: 'Confirm',
		message: 'Would you like to turn on the wifi?',
		cancel: true,
		persistent: true
	}).onOk(() => {
		router.push({ name: 'sign_in' });
	});
};
</script>

<template>
	<q-layout view="lHh lpr lFr">
		<q-header
			bordered
			class="bg-primary text-grey-10"
		>
			<nav class="flex no-wrap justify-between items-center">
				<button
					style="height: 40px; width: 40px"
					class="no-border bg-transparent cursor-pointer"
					@click="toggleLeftDrawer"
				>
					<q-icon
						name="menu"
						size="24px"
					/>
				</button>

				<p class="no-padding no-margin">Quasar App</p>

				<q-btn-dropdown
					flat
					unelevated
					no-caps
				>
					<template v-slot:label>
						<img
							src="~/assets/512.png"
							alt=""
							style="
								object-fit: cover;
								height: 32px;
								width: 32px;
								border-radius: 50%;
							"
						/>
					</template>

					<q-list>
						<q-item
							clickable
							v-close-popup
						>
							<q-item-section>
								<q-item-label>Conta</q-item-label>
							</q-item-section>
						</q-item>
						<q-item
							clickable
							v-close-popup
							@click="logout"
						>
							<q-item-section>
								<q-item-label class="text-red-10">Logout</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</nav>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
		>
			<header class="bg-primary"></header>
			<q-list>
				<EssentialLink
					v-for="link in essentialLinks"
					:key="link.title"
					v-bind="link"
				/>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<style lang="scss" scoped>
.q-drawer {
	width: min(100%, 255px);
}
.q-drawer__content header,
.q-header {
	border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.q-drawer__content header,
.q-header nav {
	height: 56px;
}
</style>
