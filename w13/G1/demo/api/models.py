from django.db import models

"""
Relations between models/tables:

1) OneToOne
2) OneToMany (in Django = ForeignKey)
3) ManyToMany (2x OneToMany)

"""


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f"{self.id}: {self.name}"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(default='')  # provide a default value
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products', null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.price}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description
        }
