
class Node {

  constructor(animal)
  {
    this.animal = animal;
    this.front = null;
  }
}


class AnimalShelter {

	constructor(){

		this.front = null;

	}



	enqueue(animal){
		if(!this.front){
			this.front = animal;
			return;
		}

		let current = this.front;

		while(current.next){

				current = current.next;

		}
		current.next = animal;
	}



	dequeue(preference){

		if(!this.front){

			return 'no pets available';

		}

		let current = this.front;

		while (current){

				if(preference === current.value){

					return current.value;

				} else {

					current = current.next;

				}

				return null;

		}

















