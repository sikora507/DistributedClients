<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#">{{name}}</a>
            </div>
            <p class="navbar-text navbar-left">{{guid}}</p>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                greeting: 'Hello'
            }
        },
        props: ['name', 'guid']
    }
</script>

<style>

</style>