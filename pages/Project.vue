<template>
    <div class="container  mx-auto mt-10">
        <h1 class="text-4xl text-center mb-10">Recents Projects</h1>
        <div id="list-projects" class="flex-row">
            <div class="md:flex flex-row items-start mx-10">
                <div class="md:w-1/2 m-2">
                    <img src="~/assets/images/wibudesu.png" alt="dummy project" />
                </div>
                <div class="md:w-1/2 m-2">
                    <h1 class="text-3xl">Wibudesu</h1>
                    <hr class="dope">
                    <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
                        <p>Watching some anime, manga and about anime news, you can see everything here</p>
                        <span><a class="text-blue-500 hover:underline font-medium" href="#">Check it Out </a><MdLinkIcon class="inline-block" w="15px" h="15px" /></span>
                        <hr class="line">
                        <div>
                            <span><a href="#" class="text-blue-500 hover:underline font-medium">View Source Code </a><GithubIcon class="inline-block" w="15px" h="15px" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
hr.dope {
    border: 0;
    width: 90px;
    border-top: 2px solid #dc3545;
    text-align: left;
    margin: initial;
    margin-top: 7px;
    margin-left: 5px;
}
hr.line{
    width: 90%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import MdLinkIcon from 'vue-ionicons/dist/md-link.vue';
export default ({
    components: {
        GithubIcon,
        MdLinkIcon
    }
})
</script>
