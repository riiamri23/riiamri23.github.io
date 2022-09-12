<template>
    <div class="container md:flex flex-row mx-auto mt-20 animate__fadeInUp animate__fast">
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
                                    <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/44c60ca22d342e997b039a5322ecf447.png" width="120px" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900">PT Indodev Niaga Internet</h3>
                                    <h3 class="text-lg font-semibold text-gray-900">Software Developer</h3>
                                </div>
                            </div>
                            <ul>
                                <li>- Merancang dokumentasi dan coding untuk fitur baru pada module attendance sunfish 6, sunfish 7</li>
                                <li>- Melakukan bug fixing pada aplikasi sunfish 6, sunfish 7 dan greatdayhr (backend)</li>
                                <li>- Mengecek jika functional aplikasi berjalan sesuai dan tidak ada error atau bug</li>
                                <li>- Men-support software implementasi dan maintance jika menemukan kendala pada module attendance</li>
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
                                <img src="https://seeklogo.com/images/L/Lawson_Station-logo-98685A0743-seeklogo.com.png" width="120px" />
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">PT Lancar Wiguna Sejahtera (Lawson)</h3>
                                <h3 class="text-lg font-semibold text-gray-900">Data Mining Programmer</h3>
                            </div>
                            </div>
                            <ul>
                                <li>- Membuat dan merancang aplikasi web order online Lawson Delivery (https://order.lws.co.id)</li>
                                <li>- Mengintegrasikan aplikasi web order online dengan POS</li>
                                <li>- Membuat aplikasi tracking pesanan untuk memastikan jika produk terlacak dari store ke customer</li>
                                <li>- Membuat aplikasi mobile untuk order online (prototype)</li>
                                <li>- Mengintegrasikan aplikasi dengan payment gateway (midtrans)</li>
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
                                <img src="https://inf.co.id/assets/images/logo-inf.jpg" width="120px" />
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">CV Infomedia Technology</h3>
                                <h3 class="text-lg font-semibold text-gray-900">Software Developer</h3>
                            </div>
                            </div>
                            <ul>
                                <li>- Membuat web company profil (https://inf.co.id)</li>
                                <li>- Membuat aplikasi perizinan SIJEMPOL untuk dpmptsp kabupaten kapuas</li>
                                <li>- Membuat aplikasi perizinan SIMPATIK untuk dpmptsp provinsi kalimantan tengah</li>
                                <li>- Install aplikasi di vps (LAMPP stack)</li>
                                <li>- Membuat trigger di database untuk proses transaksi pada aplikasi</li>
                                <li>- Membuat template perizinan dan menyesuaikan seperti permintaan kantor contoh izin: SIUP, IUJK, TDP, SIP dsb</li>
                                <li>- Memastikan jika aplikasi sudah berjalan sesuai seperti regulasi yang sudah ditetapkan oleh kantor</li>
                                <li>- Mempelajari soal tanda tangan digital dan OSS yang (akan) diterapkan oleh pemerintah (2019-2020)</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        <div class="md:w-1/2 md:block hidden">
            <img src="~/assets/images/man-computer.png" id="working-img" alt="woring" />
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
</script>