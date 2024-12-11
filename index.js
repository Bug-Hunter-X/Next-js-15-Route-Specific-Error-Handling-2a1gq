```javascript
//pages/about.js
import Error from 'next/error';

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional error for demonstration');
  } catch (error) {
    return (
      <Error statusCode={500} title={'An error occurred'} />
    );
  }
}
```