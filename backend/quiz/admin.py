from django.contrib import admin
from .models import Room, Question, Participant, Answer

admin.site.register(Room)
admin.site.register(Question)
admin.site.register(Participant)
admin.site.register(Answer)
