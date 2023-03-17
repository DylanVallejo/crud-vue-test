import { ref } from 'vue';

export const token = ref(null);

export const setToken = newToken => {
    token.value = newToken;
}
