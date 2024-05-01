# Generated by Django 5.0.1 on 2024-05-01 10:33

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_productcomment_user_liked'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='productcomment',
            name='user_dislike',
            field=models.ManyToManyField(related_name='user_disliked', to=settings.AUTH_USER_MODEL),
        ),
    ]
