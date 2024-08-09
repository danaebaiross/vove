// Example of a tree node using the defined properties.
const tree = {
    x: 100,
    y: 200,
    r: 10,
    depth: 0,
    children: [
        {
            x: 150,
            y: 250,
            r: 8,
            depth: 1,
            children: [
                {
                    x: 180,
                    y: 300,
                    r: 6,
                    depth: 2,
                    children: []
                }
            ]
        },
        {
            x: 120,
            y: 260,
            r: 8,
            depth: 1,
            children: []
        }
    ]
};

// Function to traverse the tree and log each node's properties.
function traverseTree(node) {
    console.log(`Node at depth ${node.depth}: (x: ${node.x}, y: ${node.y}, r: ${node.r})`);
    node.children.forEach(child => traverseTree(child));
}

// Traverse and log the tree structure starting from the root.
traverseTree(tree);
