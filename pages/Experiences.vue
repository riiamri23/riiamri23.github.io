<template>
    <div class="container md:flex flex-row mx-auto mt-20">
        <div class="md:w-1/2 px-4">
            <h1 class="text-4xl font-semibold line-after mb-5">My Experiences</h1>
            <div class="flex-row">
                <div class="w-full md:flex flex-row mx-auto">
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
                </div>
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