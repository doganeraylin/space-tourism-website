<template>
    <div>
        <Destination :dataList="destinationData" />
    </div>
</template>


<script>
import { data } from "@/data/data"
    export default {
        setup() {   
        const destinationData = reactive(data)
        return {
            destinationData
        }
    }
    }

</script>


<style lang="scss">

</style>