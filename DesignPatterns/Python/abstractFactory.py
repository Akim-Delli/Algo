
class Dog:
    """One of the Objects to be returned"""

    def speak(self):
        return "Wooof"

    def __str__(self):
        return "Dog"


class DogFactory:
    """Concrete Factory"""

    def get_pet(self):
        """return a dog object"""
        return Dog()

    def get_food(self):
        """returns a dog food"""
        return "Dog Food"

class PetStore:
    """pet_factory is our Abstract factory"""

    def __init__(self, pet_factory=None):
        """ pet_factory is our abstract Factory"""

        self._pet_factory = pet_factory

    def show_pet(self):
        """ Utility method to display the details of the objects returned by the DogFactory """

        pet = self._pet_factory.get_pet()
        pet_food = self._pet_factory.get_food()

        print("Our pet is {}!".format(pet))
        print("Our pet says hello by {}!".format(pet.speak()))
        print("Its food is {}!".format(pet_food))

# Create a Concrete Factory
factory = DogFactory()

# Create a pet store housing our Abstract Factory
shop = PetStore(factory)


shop.show_pet()
