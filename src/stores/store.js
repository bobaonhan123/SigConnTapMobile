import { create } from 'zustand'

export const useNamePopupStore = create((set) => ({
    isVisible: false,
    toggle: () => {
        set((state) => ({ isVisible: !state.isVisible }))
    },
    isChanged: false,
    change: () => {
        set((state) => ({ isChanged: !state.isChanged }))
    },
}))

export const useTagPopupStore = create((set) => ({
    isVisible: false,
    toggle: () => {
        set((state) => ({ isVisible: !state.isVisible }))
    },
    isChanged: false,
    change: () => {
        set((state) => ({ isChanged: !state.isChanged }))
    },
    url: "",
    setUrl: (newUrl) => {
        set((state) => ({ url: newUrl }))
    },
}))

export const useProfile = create((set) => ({
    id: null,
    name: '',
    slogan: '',
    img: '',
    contact: [],
    editImg: (newImg) => set((prevState) => ({ img: newImg })),
    updateState: (newState) => set((prevState) => ({ ...prevState, ...newState })),
    addContact: (newContact) => set((prevState) => ({
        contact: [...prevState.contact, newContact],
    })),
    editContactName: (index, newName) => set((prevState) => ({
        contact: prevState.contact.map((contact, i) =>
            i === index ? { ...contact, name: newName } : contact
        ),
    })),
    editContactUrl: (index, newUrl) => set((prevState) => ({
        contact: prevState.contact.map((contact, i) =>
            i === index ? { ...contact, url: newUrl } : contact
        ),
    })),
    updateName: (newName) => set((prevState) => ({
        name: newName,
    })),
    updateSlogan: (newSlogan) => set((prevState) => ({
        slogan: newSlogan,
    })),
    deleteContact: (index) => set((prevState) => ({
        contact: prevState.contact.filter((_, i) => i !== index),
    })),
}));


export const useSuccess = create((set) => ({
    isVisible: false,
    showFor5Seconds: () => {
        set({ isVisible: true });
        setTimeout(() => {
            set({ isVisible: false });
        }, 5000);
    },
}));

export const useLoadingStore = create((set) => ({
    loading: false,
    setLoading: (isLoading) => set({ loading: isLoading }),
}));

export const useReloadBoxes = create((set) => ({
    isChanged: false,
    setChanged: () => set((state) => ({ isChanged: !state.isChanged })),
}));