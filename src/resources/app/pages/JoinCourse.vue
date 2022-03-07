<template>
    <div>
        <v-card
            id="join-card"
            elevation="2"
            max-width="372px"
            class="p-6"
        >
            <div
                id="title"
            >
                Enter Code
            </div>
            <div
                id="sub-title"
            >
                Class code provided by your teacher
            </div>
            <div>
                <v-text-field
                    id="code-form"
                    label="Class Code"
                    outlined
                ></v-text-field>
            </div>
            <div>
                <v-btn
                    id="join-btn"
                    depressed
                    color="#FEFEFE"
                    :disabled=true
                >
                    Join
                </v-btn>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    components: {},
};
</script>
