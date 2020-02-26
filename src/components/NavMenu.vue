<template>
    <div>
        <ul class="nav-menu-main">
            <li class="nav-menu-item"><span class="nav-menu-item-title active">Home</span></li>
            <li class="nav-menu-item"><span class="nav-menu-item-title">Blog</span></li>
            <li class="nav-menu-item"><span class="nav-menu-item-title">Project</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style scoped>
    .nav-menu-main {
        display: flex;
        color: white;
        font-weight: bold;
        line-height: 87px;
        font-size: 14px;
        letter-spacing: 1px;
        list-style: none;
        position: fixed;
        right: 0;
        margin: 0;
    }

    .nav-menu-link {

    }

    .nav-menu-item-title {
        color: aqua;
        position: relative;
    }

    .nav-menu-item-title:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        background: azure;
        width: 0;
        height: 2px;
        transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transition: all .5s;
        -webkit-transition: all .5s;
        -o-transition: all .5s;
        -ms-transition: all .5s;
    }

    .nav-menu-item-title:hover {
        color: #fff;
    }

    .nav-menu-item-title:hover:after {
        width: 20px;
    }

    .nav-menu-item {
        padding: 0 20px;
    }
    .active {
        color: white;
    }

    .nav-menu-item-title.active:after {
        width: 20px;
    }
</style>