'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {

    // const cache = createCache();
    const [cache] = useState(() => createCache())    

    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));
    return <StyleProvider hashPriority='high' cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;