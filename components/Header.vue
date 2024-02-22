<script lang="ts" setup>
const [value, toggle] = useToggle()
const menus = [
  { key: 'Home', content: 'Home', url: '/' },
  { key: 'About', content: 'About us', url: '/about' },
  { key: 'Contact', content: 'Contact us', url: '/contact' },
]
</script>

<template>
  <header class="">
    <div class="min-h-16 flex items-center justify-between border-b-1 px-6 shadow-sm">
      <div class="flex items-center">
        <Logos />
      </div>
      <div class="justify-end md:flex md:flex-1">
        <div class="hidden md:flex">
          <menu>
            <div class="flex gap-2">
              <div v-for="menu in menus" :key="menu.key">
                <NuxtLink :to="menu.url" class="menu-item">
                  {{ menu.content }}
                </NuxtLink>
              </div>
            </div>
          </menu>
        </div>
        <!-- Menu mobile -->
        <button class="border rounded bg-gray-300 text-gray-900 btn md:hidden" hover="text-white bg-gray-800" @click="toggle()">
          <div i-carbon-menu />
        </button>
        <div
          class="visible fixed inset-0 z-10 transition-all duration-300 ease-in-out"
          :class="value ? ' opacity-100' : 'opacity-0 invisible'"
        >
          <div class="h-full w-full bg-[#24231dc4] transition-all duration-300 ease-in-out" @click="toggle()" />

          <div
            class="absolute left-[-110%] top-0 max-w-[310px] min-h-full w-full bg-white shadow-2xl transition-all duration-300 ease-in-out"
            :class="value ? 'left-0' : ''"
          >
            <button class="absolute right--6 top-6 z-50">
              <button class="h-10 w-10 flex items-center justify-center rounded-full p-0 text-white drop-shadow btn md:hidden" @click="toggle()">
                <div i-carbon-close />
              </button>
            </button>
            <div class="bg-primary h-20 flex items-center px-6">
              <Logos class="text-white" />
            </div>

            <menu class="p-6">
              <div class="flex flex-col gap-2">
                <div v-for="menu in menus" :key="menu.key" @click="toggle()">
                  <NuxtLink :to="menu.url" class="menu-item">
                    {{ menu.content }}
                  </NuxtLink>
                </div>
              </div>
            </menu>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css">
.router-link-exact-active {
  color: #1a6fff;
}
</style>
