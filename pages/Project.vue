<template>
    <div class="container mx-auto mt-10 animate__animated animate__fadeInUp animate__fast">
        <h1 class="text-4xl text-center mb-10">Recents Projects</h1>
        <div id="list-projects" class="flex-row">
            <!-- My Wibudesu Project -->
            <div class="md:flex flex-row items-start mx-10">
                <div class="md:w-1/2 m-2">
                    <img src="~/assets/images/wibudesu.jpeg" alt="dummy project" />
                </div>
                <div class="md:w-1/2 m-2">
                    <h1 class="text-3xl">Wibudesu</h1>
                    <hr class="dope">
                    <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
                        <p>Watching some anime, manga and about anime news, you can see everything here</p>
                        <span><a class="text-blue-500 hover:underline font-medium" :href="demoLinks.wibudesuDemo" target="_blank">Check it Out </a><MdLinkIcon class="inline-block" w="15px" h="15px" /></span>
                        <hr class="line">
                        <div>
                            <span><a :href="projectLinks.wibudesuLink" target="_blank" class="text-blue-500 hover:underline font-medium">View Source Code </a><GithubIcon class="inline-block" w="15px" h="15px" /></span>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- My Pokedex Project -->
            <div class="md:flex flex-row items-start mx-10">
                <div class="md:w-1/2 m-2">
                    <img src="~/assets/images/mypokedex.jpeg" alt="dummy project" />
                </div>
                <div class="md:w-1/2 m-2">
                    <h1 class="text-3xl">My Pokedex</h1>
                    <hr class="dope">
                    <div class="w-full rounded-lg border border-gray-200 p-5 my-5">
                        <p>Look at pokedex you love there, you can see every pokemon here</p>
                        <span><a class="text-blue-500 hover:underline font-medium" :href="demoLinks.mypokedexDemo"  target="_blank">Check it Out </a><MdLinkIcon class="inline-block" w="15px" h="15px" /></span>
                        <hr class="line">
                        <div>
                            <span><a :href="projectLinks.mypokedexLink" target="_blank" class="text-blue-500 hover:underline font-medium">View Source Code </a><GithubIcon class="inline-block" w="15px" h="15px" /></span>
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
    data(){
        return {
            projectLinks: {
                wibudesuLink: "https://github.com/riiamri23/wibudesu2",
                mypokedexLink: "https://github.com/riiamri23/mypokedex"
            },
            demoLinks: {
                wibudesuDemo: "https://wibudesu.vercel.app/",
                mypokedexDemo: "https://mypokedex-ten.vercel.app/"
            }
        }
    },
    components: {
        GithubIcon,
        MdLinkIcon
    }
})
</script>
