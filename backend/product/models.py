from hashlib import blake2b
from pyexpat import model
from django.db import models
import uuid

# Create your models here.
def upload_to(instance, filename):
    return f'images/{filename}'


class Product(models.Model):
    PRODUCT_TAG = (
        ('flower', 'flower'),
        ('bouquet', 'bouquet'),
    )
    title = models.CharField(max_length=100)
    description = models.TextField(default=" ")
    tag = models.CharField(max_length=8, choices=PRODUCT_TAG)
    primaryImg = models.ImageField(upload_to=upload_to)
    img_1 = models.ImageField(upload_to=upload_to, null=True, blank=True)
    img_2 = models.ImageField(upload_to=upload_to, null=True, blank=True)
    img_3 = models.ImageField(upload_to=upload_to, null=True, blank=True)
    img_4 = models.ImageField(upload_to=upload_to, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_on = models.DateTimeField(auto_now=True, null=True, blank=True)
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False, )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_on',)