from django.db import models

"""
Relations between models / tables;

1) OneToOne (Ex: one User -> one Profile)
2) OneToMany / ForeignKey (Ex: one Category -> many Products)
3) ManyToMany (Ex: many Posts -> many Tags)
"""


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f"{self.id} - {self.name}"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(default='')  # provide a default value
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products', null=True, blank=True)

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
