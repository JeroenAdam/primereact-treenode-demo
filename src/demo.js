
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function CheckboxSelectionDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
    )
}
        