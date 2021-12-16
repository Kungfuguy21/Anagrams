/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/


const fs = require('fs');

// Think about your components:
// first you sort each work to
// get a alphanumerical word, and

// then you sort each word against
// each other words alphanumerical word
// Hmm...
// We wish you well!



function anagrams() {
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	// for (let i = 0; i < dictionary.length; i++) {
	// 	console.log(dictionary[i]);
	// }


	function quickSort(arr, low, high) {
		if (low < high) {
			/* pivot is partitioning index, arr[pi] is now
			   at right place */
			pivot = bigBoy(arr, low, high);

			quickSort(arr, low, pivot - 1); // Before pivot
			quickSort(arr, pivot + 1, high); // After pivot
		}
	}

	function swap(arr, pos1, pos2) {
		let storage = arr[pos1];
		arr[pos1] = arr[pos2];
		arr[pos2] = storage;
	}

	function bigBoy(arr, low, high) {
		let pivot = high;
		let pos = low - 1;
		let j = low;

		while (j < pivot) {
			//for (let j = low; j < high - 1; j++) {
			if (arr[j] < arr[pivot]) {
				pos += 1;
				swap(arr, pos, j);
			}

			j++;
		}
		//pos += 1;
		swap(arr, pos + 1, pivot);
		pivot = pos + 1;
		//bigBoy(arr, low, pivot - 1);
		//bigBoy(arr, pivot + 1, high);
		return pivot;
	}
	//for (j = 0; j < dictionary.length; j++) {
		let unsorted_arr = dictionary.toString().split("\r\n");
		console.log(unsorted_arr);
		for (i = 0; i < unsorted_arr.length; i++) {
			quickSort(unsorted_arr[i], 0, unsorted_arr[i].length - 1)
			for (j = 0; j < unsorted_arr[j]; j++) {
				quickSort(unsorted_arr[j], 0, unsorted_arr[j].length - 1)
			}
		}

		
		quickSort(unsorted_arr, 0, unsorted_arr.length - 1);
		console.log(unsorted_arr);

		//unsorted_arr = dictionary.join("");

		fs.writeFileSync("./myIndex.txt", dictionary + '\n');
	}
//}

anagrams();
console.log("Hey!");