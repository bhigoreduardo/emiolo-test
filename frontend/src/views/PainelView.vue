<template>
    <nav class="navbar navbar-light bg-white mb-4 static-top shadow d-flex justify-content-center gap-3">
        <span class="">John Doe</span>
        <img :src="userImage" class="" />
        <button class="btn-primary ">
            <fa icon="user" />
            Perfil
        </button>
        <button class="btn-light ">
            <fa icon="sign-out" />
            Sair
        </button>
    </nav>

    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Usuário cadastrados</h6>
            </div>
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="bg-white">
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>

                    <tbody class="bg-white">
                        <tr>
                            <td>1</td>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PainelView',
    data() {
        return {
            userImage: '/images/male-profile.svg'
        }
    },
}
</script>

<style scoped>
img {
    width: 32px;
}
</style>