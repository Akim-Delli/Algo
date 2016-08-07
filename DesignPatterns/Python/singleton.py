class Borg:
    """Borg class mking class attributes global"""
    # Attribute disctionary
    _shared_state = {}

    def __init__(self):
        self.__dict__ = self._shared_state # Make it an attribute dictionary


class Singleton(Borg):
    """This class now shares all its attributes among its various instances"""

    def __init__(self, **kwargs):
        Borg.__init__(self)
        self._shared_state.update(kwargs)

    def __str__(self):
        # Returns the attribute dictionay for printing
        return str(self._shared_state)

x = Singleton(HTTP="hyper Text Transfer Protocol")
print(x)
y = Singleton(SNMP="Simple Network Management Protocol")
print(y)
