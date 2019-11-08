// Require all files matching /-spec/ under the src directory.
const testsContext = require.context('./src', true, /-spec$/);

testsContext.keys().forEach(testsContext);
