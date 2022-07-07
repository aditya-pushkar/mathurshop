from django.db import models
import uuid


class Social(models.Model):
    fb = models.URLField(max_length=500, null=True, blank=True)
    instagram = models.URLField(max_length=500,  null=True, blank=True)
    twitter = models.URLField(max_length=500, null=True, blank=True)
    phone_number = models.CharField(max_length=12, null=True, blank=True)
    whatsapp_number = models.CharField(max_length=12, null=True, blank=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False)

      
