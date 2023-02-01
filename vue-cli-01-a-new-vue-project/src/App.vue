<template>
    <section>
        <header><h1>My Friends</h1></header>
        <ul>
            <friend-list></friend-list>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [{
                id: 'lorenz',
                name: 'Lorenz Vue',
                phone: '93897 98787 78978',
                email: 'llorz@mail.com'
            },
            {
                id: 'julia',
                name: 'Julia da Bird',
                phone: '93822 98227 22978',
                email: 'jubby@mail.com'
            }]
        }
    }
}
</script>