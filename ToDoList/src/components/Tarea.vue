<template>
    <div>
        <h1 class="display-4 text-center">Lista de tareas</h1>
        <hr>
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" v-model="task" class="form-control form-control-lg" placeholder="Agregar Tarea">
                            <div class="input-group-append">
                                <button @click="addTask" class="btn btn-info btn-lg">Agregar</button>
                            </div>
                        </div>
                        <br>
                        <div class="text-center">
                            <div v-show="isLoading" class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <h5 v-show="listTask.length === 0">No hay tareas para realizar</h5>
                        <ul v-if="!isLoading" class="list-group">
                            <li 
                            v-for="(task,index) in listTask" 
                            :key="task.id" 
                            @dblclick="handleDoubleClick(index)" 
                            class="list-group-item d-flex justify-content-between">
                                <span v-show="!isEditing(index)" class="cursor" v-bind:class="{'text-info':task.estado}" @click="updateTask(task,task.id)">
                                    <i v-bind:class="[task.estado ? 'fas fa-check-circle' : 'far fa-circle']" ></i>
                                </span>

                                <input v-show="isEditing(index)" type="text" v-model="task.nombre" class="form-control" @blur="handleBlur(task)">

                                <span v-show="!isEditing(index)" >
                                    {{ task.nombre }}
                                </span>

                                <span v-show="!isEditing(index)" class="cursor text-danger" @click="removeTask(task.id)">
                                    <i class="fas fa-trash-alt"></i>
                                </span>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { getTasksAll,deleteTask,createTask,updateTaskStatus, updateTaskDB } from '../api/getData';
    let listTask = ref([]);
    let task = ref('');
    let isLoading = ref(false);
    let isEdit = ref(false);
    onMounted(async () => {
        try {
            isLoading.value = true;
            listTask.value = await getTasksAll();
            isLoading.value = false;
        } catch (error) {
            console.error(error);
        }
    });

    const addTask = async () => {
        if (task.value != '') {
            let objectTask = {
                nombre:task.value,
                estado:false
            }
            task.value = "";
            isLoading.value = true;
            await createTask(objectTask);
            listTask.value = await getTasksAll();
            isLoading.value = false;
            // listTask.value.push(objectTask);
        }else{
            console.log("error debe escribir la tarea");
        }
    }

    const removeTask = async (index) => {
        // listTask.value.splice(index,1);
        isLoading.value = true;
        let status = await deleteTask(index);
        if (status > 200 && status < 299) {
            listTask.value = await getTasksAll();
        }
        isLoading.value = false;
    }
    
    async function updateTask(task,index) {
        // listTask.value[index].estado = !listTask.value[index].estado;
        isLoading.value = true;
        await updateTaskStatus(task,index);
        listTask.value = await getTasksAll();
        isLoading.value = false;
    }

    const handleBlur = async (task) => {
        isEdit.value = null; // Reiniciar la edición
        isLoading.value = true;
        await updateTaskDB(task,task.id);
        listTask.value = await getTasksAll();
        isLoading.value = false;
    }

    const isEditing = (index) => {
        return isEdit.value === index;
    }
    
    const handleDoubleClick = (index) => {
        isEdit.value = index;
    }


</script>

<style scoped>
    .cursor{
        cursor: pointer;
    }
</style>