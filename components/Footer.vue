<script lang="ts" setup>
const infos = [
  { key: 1, title: 'Call us', content: '+91 123 456 78', icon: 'i-carbon-phone' },
  { key: 2, title: 'Write to us', content: 'info@example.com', icon: 'i-carbon-email' },
  { key: 3, title: 'Office hours', content: 'Mon - Fri: 9:00 - 17:00', icon: 'i-carbon-time' },
]
</script>

<template>
  <footer>
    <div class="bg-[#091D3E] bg-[url(https://wptf.themepul.co/restly/wp-content/uploads/2021/04/ftbg2.png)] bg-cover bg-center bg-no-repeat pt-25 text-gray-300">
      <div class="mx-auto mb-20 container">
        <div class="grid grid-cols-3">
          <div v-for="info in infos" :key="info.key" class="flex items-center gap-4">
            <div class="bg-primary-700 h-10 w-10 flex items-center justify-center rounded-full">
              <div :class="info.icon" />
            </div>
            <div class="flex flex-col">
              <p class="">
                {{ info.title }}
              </p>
              <p class="text-white font-bold">
                {{ info.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto mb-20 container">
        <div class="grid grid-cols-4 gap-3">
          <!-- Company -->
          <div>
            <h6 class="mb-10 text-7 text-white font-bold">
              Company
            </h6>
            <div class="pr-[50px]">
              <p class="mb-5">
                At TechPros Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.
              </p>
              <div class="flex items-center gap-4">
                <div class="h-10 w-10 flex items-center justify-center rounded-full bg-slate-700">
                  <div class="i-carbon-location" />
                </div>
                <div class="flex flex-col">
                  <p class="">
                    1791 Yorkshire Circle Kitty
                  </p>
                  <p class="font-bold">
                    Hawk, NC 279499
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Page link -->
          <div class="mx-auto">
            <h6 class="mb-10 text-7 text-white font-bold">
              Page Links
            </h6>
            <div class="flex flex-col items-start gap-2">
              <NuxtLink to="#" class="footer-link">
                Service
              </NuxtLink>
              <NuxtLink to="#" class="footer-link">
                Portfolio
              </NuxtLink>
              <NuxtLink to="#" class="footer-link">
                Contact us
              </NuxtLink>
              <NuxtLink to="#" class="footer-link">
                Blog Us
              </NuxtLink>
              <NuxtLink to="#" class="footer-link">
                About Us
              </NuxtLink>
            </div>
          </div>
          <!-- contact -->
          <div class="mx-auto">
            <h6 class="mb-10 text-7 text-white font-bold">
              Contacts
            </h6>
            <div class="flex flex-col items-start gap-2">
              <div class="flex items-start gap-2">
                <div class="h-7 w-7 flex items-center justify-center rounded-full">
                  <div class="i-carbon-location" />
                </div>
                <div class="flex flex-col">
                  <p class="">
                    1791 Yorkshire Circle Kitty
                  </p>
                  <p class="font-bold">
                    Hawk, NC 279499
                  </p>
                </div>
              </div>
              <div class="flex gap-2">
                <div class="h-7 w-7 flex items-center justify-center rounded-full">
                  <div class="i-carbon-time" />
                </div>
                <p>Mon-Sat 9:00 - 7:00</p>
              </div>
              <div class="flex gap-2">
                <div class="h-7 w-7 flex items-center justify-center rounded-full">
                  <div class="i-carbon-phone" />
                </div>
                <p>+012-345-6789</p>
              </div>
              <div class="flex gap-2">
                <div class="h-7 w-7 flex items-center justify-center rounded-full">
                  <div class="i-carbon-email" />
                </div>
                <p>
                  info@example.com
                </p>
              </div>
            </div>
          </div>
          <!-- Subscribe -->
          <div class="mx-auto">
            <h6 class="mb-10 text-7 text-white font-bold">
              Subscribe
            </h6>
            <p>Are you interested in follow to a particular website</p>
            <div class="mt-5">
              <div class="relative flex gap-2">
                <input
                  type="text" class="border-primary w-full border rounded-full bg-transparent px-6 py-4 placeholder:text-white" placeholder="Enter your email"
                  outline="none active:none"
                >
                <button class="bg-primary hover:bg-primary-600 absolute right-0 m-2 h-10 w-10 flex items-center justify-center rounded-full transition-all">
                  <div class="i-carbon-send-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 border-t border-t-gray-600 py-5">
        <div class="mx-auto container">
          <div class="flex justify-between">
            <div class="col-sm-12 col-12 col-lg-6 col-md-6">
              <div class="text-white font-600">
                © Copyright 2021 Restly All Rights Reserved <a href="https://themepul.com">Themepul</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
