import * as index from '../src/index';

xtest('Should have Greeter available', () => {
  	console.log(`Tester`);
	expect(index.Greeter).toBeTruthy();
});
