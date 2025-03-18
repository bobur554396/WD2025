from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(default='')  # provide a default value

    # description = models.TextField(null=True, blank=True) # make column as nullable

    def __str__(self):
        return f"{self.name} - {self.price}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description
        }
