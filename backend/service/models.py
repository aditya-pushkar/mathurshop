from django.db import models
import uuid


class Service(models.Model):
    primaryImg = models.ImageField(default="flower-bouquet.jpeg")
    img_1 = models.ImageField(null=True, blank=True)
    img_2 = models.ImageField(null=True, blank=True)
    img_3 = models.ImageField(null=True, blank=True)
    img_4 = models.ImageField(null=True, blank=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False)
