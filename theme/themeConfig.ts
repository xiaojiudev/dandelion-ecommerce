// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 14,
        colorPrimary: '#e94b7c',
        colorLinkActive: '#e94b7c',
        colorLink: '#f06292',
        controlHeightLG: 48,
        controlHeightSM: 32,
        controlHeightXS: 24,
        controlHeight: 42,
    },
    components: {
        Checkbox: {
            controlHeight: 32,
            algorithm: true,
        },

    }
};

export default theme;