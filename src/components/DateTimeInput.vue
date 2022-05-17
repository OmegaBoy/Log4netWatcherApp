<template>
    <q-input filled v-model="StartDateTime" :label="label" :hint="hint">
        <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="StartDateTime" mask="YYYY/MM/DD HH:mm">
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>

        <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="StartDateTime" mask="YYYY/MM/DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                    </q-time>
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "DateTimeInput",
    props: {
        Date: {
            type: Date
        },
        Hint: {
            type: String
        },
        label: {
            type: String
        }
    },
    mounted() {
        console.log("datetimeinput")
    }
})
</script>
