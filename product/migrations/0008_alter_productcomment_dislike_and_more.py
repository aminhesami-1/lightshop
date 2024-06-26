# Generated by Django 5.0.3 on 2024-05-02 10:54

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_productcomment_user_dislike'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcomment',
            name='dislike',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='productcomment',
            name='like',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='productcomment',
            name='user_dislike',
            field=models.ManyToManyField(blank=True, null=True, related_name='user_disliked', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='productcomment',
            name='user_liked',
            field=models.ManyToManyField(blank=True, null=True, related_name='user_liked', to=settings.AUTH_USER_MODEL),
        ),
    ]
