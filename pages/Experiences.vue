<template>
    <div class="container md:flex flex-row mx-auto mt-20 animate__animated animate__fadeInUp animate__fast">
        <div class="md:w-1/2 px-4">
            <h1 class="text-4xl font-semibold line-after mb-5">My Experiences</h1>
            <div class="flex-row">
                <!-- <div class="w-full md:flex flex-row mx-auto">
                    <img src="~/assets/images/dataon.png" alt="dataon company logo" class="md:w-40">
                    <div class="ml-4">
                        <h2 class="text-2xl font-medium mb-2">PT. Indodev Niaga Internet</h2>
                        <h4 class="text-xl font-medium mb-2">Software Developer</h4>
                    </div>
                </div>
                <div class="w-full">
                    <ul class="list-disc marker:text-blue-500 mx-4">
                        <li>Designing documentation and coding for new features in Sunfish 6, Sunfish 7</li>
                        <li>Doing bug fixing on Sunfish 6, Sunfish 7 and GreatDayHR (backend) applications</li>
                        <li>Checks if the functional application is running properly and there are no errors or bugs</li>
                        <li>Support software implementation and maintenance if you find problems with module attendance</li>
                    </ul>
                </div> -->
                <ol class="relative border-l border-gray-700">
                    <li class="mb-10 ml-4">
                        <div
                            class="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700">
                        </div>
                        <div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-900">Juli 2021 - Present</time>
                            <div class="flex">
                                <div class="pr-4">
                                    <!-- <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/44c60ca22d342e997b039a5322ecf447.png" width="120px" /> -->
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900">PT Indodev Niaga Internet</h3>
                                    <h3 class="text-lg font-semibold text-gray-900">Software Developer</h3>
                                </div>
                            </div>
                            <ul class="list-disc list-outside ml-4">
                                <li>Designing documentation and coding for new features in sunfish 6, sunfish 7 just for attendance module</li>
                                <li>Doing bug fixing on sunfish 6, sunfish 7 and greatdayhr (backend) applications</li>
                                <li>Checks if the functional application is running properly and there are no errors or bugs</li>
                                <li>Support software implementation and maintenance if they had a problem with module attendance</li>
                            </ul>
                        </div>
                    </li>

                    <li class="mb-10 ml-4">
                        <div
                            class="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700">
                        </div>
                        <div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-900">Maret 2020 - Juli 2021</time>
                            <div class="flex">
                            <div class="pr-4">
                                <!-- <img src="https://seeklogo.com/images/L/Lawson_Station-logo-98685A0743-seeklogo.com.png" width="120px" /> -->
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">PT Lancar Wiguna Sejahtera (Lawson)</h3>
                                <h3 class="text-lg font-semibold text-gray-900">Data Mining Programmer</h3>
                            </div>
                            </div>
                            <ul class="list-disc list-outside ml-4">
                                <li>Create and design the Lawson Delivery online order web application (https://order.lws.co.id)</li>
                                <li>Integrating online order web application with POS</li>
                                <li>Create an order tracking application to ensure that products are traced from the store to the customer</li>
                                <li>Create a mobile application for online orders (prototype)</li>
                                <li>Integrating applications with payment gateways (midtrans)</li>
                            </ul>
                        </div>
                    </li>

                    <li class="mb-10 ml-4">
                        <div
                            class="absolute w-3 h-3  rounded-full -left-1.5 border border-gray-900 bg-gray-700">
                        </div>
                        <div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-900">September 2017 - Februari 2020</time>
                            <div class="flex">
                            <div class="pr-4">
                                <!-- <img src="https://inf.co.id/assets/images/logo-inf.jpg" width="120px" />- -->
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">CV Infomedia Technology</h3>
                                <h3 class="text-lg font-semibold text-gray-900">IT Staff</h3>
                            </div>
                            </div>
                            <ul class="list-disc list-outside ml-4">
                                <li>Create a web company profile (https://inf.co.id)</li>
                                <li>Create application web SIJEMPOL for dpmptsp district kapuas</li>
                                <li>Create application web SIMPATIK for dpmptsp province central kalimantan</li>
                                <li>Install and maintance application web on vps (LAMPP stack)</li>
                                <li>Create triggers in the database to process transactions in the application</li>
                                <li>Create licensing templates and customize such as office requests for examples of permits: SIUP, IUJK, TDP, SIP, etc.</li>
                                <li>Ensure that the application is running according to the regulations set by the office</li>
                                <li>Learn about digital signatures and OSS that will be implemented by the government (2019-2020)</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        <div class="md:w-1/2 md:block hidden">
            <img src="~/assets/images/man-computer.jpeg" id="working-img" alt="man-computer-image" />
        </div>
    </div>
</template>
<style scoped>
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
</style>

<script>

export default ({

head: {
  title: "Syaeful Amri - Experiences",
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