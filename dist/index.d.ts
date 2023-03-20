declare const checkNode: (requiredNodeVersion: string, options: {
    fail: boolean;
}) => string | null;
export default checkNode;
