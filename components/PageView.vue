<script setup lang="ts">
const services = [
  { key: 1, title: 'Product service', content: 'We’ve been a nearly strategic thought leader for five we are bring unrivaled decades' },
  { key: 2, title: 'IT Management', content: 'We’ve been a nearly strategic thought leader for five we are bring unrivaled decades' },
  { key: 3, title: 'Cloud Services', content: 'We’ve been a nearly strategic thought leader for five we are bring unrivaled decades' },
  { key: 4, title: 'Machine Learning', content: 'We’ve been a nearly strategic thought leader for five we are bring unrivaled decades' },
]
</script>

<template>
  <section>
    <div
      class="bg-[url(https://wptf.themepul.co/restly/wp-content/uploads/2021/04/banner-home.jpg)]"
      bg="~ center cover no-repeat"
    >
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-2/3 md:w-4/5">
          <div class="py-30 text-center text-white md:py-50">
            <h6 class="mb-5 text-5 font-600 uppercase">
              Empower your business
            </h6>
            <h2 class="mb-5 text-18 font-700 leading-[70px]">
              Excellent IT services for your success
            </h2>
            <div class="mt-9 px-7 py-3 font-600 btn">
              <a href="https://wptf.themepul.co/restly/contact-us/" class="theme-btns">Meet With Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto my-20 px-6 container">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-4 md:(grid-cols-2 gap-8)">
      <div v-for="service in services" :key="service.key" class="group relative overflow-hidden border rounded px-5 py-7 shadow-sm">
        <div class="flex flex-col gap-4">
          <div class="i-carbon-content-delivery-network h-[70px] w-[70px] text-blue-500" />
          <p class="text-4 font-700">
            {{ service.title }}
          </p>
          <p>{{ service.content }}</p>
          <p />
        </div>
        <div class="bg-primary invisible absolute inset-0 scale-140 p-5 text-white opacity-0 transition transition-400 ease-in-out group-hover:(visible scale-100 opacity-100)">
          <p class="mb-4 text-5 font-bold">
            Preparing For Your Business Success With IT Solution
          </p>
          <p class="mb-5">
            unrivaled we are bring decades strategic thought
          </p>
          <button class="bg-primary-300 w-full border btn">
            Learn more
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
