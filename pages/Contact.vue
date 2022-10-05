<template>
<div class="container flex-row items-center justify-center m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg animate__animated animate__fadeInUp animate__fast">
    <div class="text-center">
        <h1 class="text-4xl">Get in Touch</h1>
        <p>If you have any question or just want to say hi, i'll try my best to get back to you</p>
    </div>
    <form action=”mailto:contact@yourdomain.com”
    method=”POST”
    enctype=”text/plain”
    name=”EmailForm”>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="yourname">
                Your Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="yourname" type="text" placeholder="yourname">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Your Email">
                Your Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Your Email" type="text" placeholder="Your Email">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="yourmessage">
                Your Message
            </label>
            <textarea
            class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
            ></textarea>
        </div>
        <button type="submit" class="text-white bg-red-500 px-3 py-2 rounded mx-2">Send</button>
    </form>
</div>
</template>

<script>

export default ({

head: {
  title: "Syaeful Amri - Contact",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Syaeful Amri portfolio for work, i can do what you need, my domain web is riiamri github io i hope someone can search my web in their chrome or firefox or whatever, Syaeful Amri Profesional Software Developer, I’ve no life and I’m a programmer. I've sacrificed my life to learn programming languages to build apps. I can make your dream come true with my power and knowledge.",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "portfolio rii amri github",
    },
    {
      property: "og:description",
      content:
        "Syaeful Amri bekerja di PT. Indodev Niaga Internet, pernah kuliah di universitas muhammadiyah purwokerto",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://avatars.githubusercontent.com/u/39664310?v=4",
    },
  ],
},
})
</script>
