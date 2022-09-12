<template>
    <div class="container md:flex flex-row mx-auto mt-20 ">
        <div class="md:w-1/2 px-4 animate__animated animate__fadeInUp animate__fast">
            <h1 class="text-4xl font-semibold line-after mb-5">About Me</h1>
            <h4 class="text-xl font-medium mb-2">Hey 👋</h4>
            <p>My Name is Syaeful Amri, I’ve no life and I’m a programmer. I've sacrificed my life to learn programming languages to build apps. I can make your dream come true with my power and knowledge.</p>
            <p>I have 5+ years experience in crafting beautiful web and mobile interfaces. Plus I am an agile learner, I learn new cool stuffs everyday.</p>
            <h4 class="text-xl font-medium mb-2">Tech Stacks</h4>
            <p>Below are some of the technologies i use daily:</p>
            <div class="flex mx-4">
                <ul class="list-disc marker:text-blue-500 mx-4">
                    <li>HTML & CSS</li>
                    <li>Node JS</li>
                    <li>PHP</li>
                </ul>

                <ul class="list-disc marker:text-blue-500 mx-4">
                    <li>Javascript</li>
                    <li>Vue JS</li>
                    <li>React JS</li>
                </ul>
            </div>
        </div>
        <div class="md:w-1/2 md:block hidden">
                <img 
                    src="~/assets/images/working.png"
                    id="working-img"
                    alt="woring" />
        </div>
    </div>
</template>

<script>

export default ({
})
</script>

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
p{
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>