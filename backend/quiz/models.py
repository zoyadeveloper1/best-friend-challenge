from django.db import models
import uuid


class Room(models.Model):
    room_code = models.CharField(
        max_length=8,
        unique=True,
        default=uuid.uuid4().hex[:8]
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.room_code



class Question(models.Model):
    room = models.ForeignKey(
        Room,
        on_delete=models.CASCADE,
        related_name="questions"
    )

    question = models.CharField(max_length=255)

    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    option4 = models.CharField(max_length=100)

    # Correct answer
    answer = models.CharField(max_length=100)

    def __str__(self):
        return self.question



class Participant(models.Model):
    room = models.ForeignKey(
        Room,
        on_delete=models.CASCADE,
        related_name="participants"
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Answer(models.Model):
    participant = models.ForeignKey(
        Participant,
        on_delete=models.CASCADE,
        related_name="answers"
    )

    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name="submitted_answers"
    )

    selected_answer = models.CharField(max_length=100)

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.participant.name} - {self.question.question}"