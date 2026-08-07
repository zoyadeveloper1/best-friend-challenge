from rest_framework import serializers

from .models import (
    Room,
    Question,
    Participant,
    Answer
)



class RoomSerializer(serializers.ModelSerializer):

    class Meta:

        model = Room

        fields = "__all__"




class QuestionSerializer(serializers.ModelSerializer):

    class Meta:

        model = Question

        fields = "__all__"




class ParticipantSerializer(serializers.ModelSerializer):

    class Meta:

        model = Participant

        fields = "__all__"




class AnswerSerializer(serializers.ModelSerializer):

    class Meta:

        model = Answer

        fields = "__all__"