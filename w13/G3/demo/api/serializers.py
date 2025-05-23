from rest_framework import serializers

from api.models import Product


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField()


class ProductSerializer2(serializers.ModelSerializer):
    category_id = serializers.IntegerField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category_id')
