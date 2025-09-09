import { create } from "storio";

export const dimensionsStore = create((set) => ({
    vw: 0,
    setVw: (width) => set({ vw: width }),

    isMobile: () => {
        const { vw } = dimensionsStore.getState();
        return vw <= 600;
    },
    isTablet: () => {
        const { vw } = dimensionsStore.getState();
        return vw > 600 && vw <= 1024;
    },
    isDesktop: () => {
        const { vw } = dimensionsStore.getState();
        return vw >= 1024;
    },
}));
