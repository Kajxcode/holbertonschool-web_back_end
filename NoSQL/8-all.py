#!/usr/bin/env python3
"""the module defines a function"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """connects to mongo and lists all documents in a collection"""
    documents = list (mongo_collection.find())
    return documents
